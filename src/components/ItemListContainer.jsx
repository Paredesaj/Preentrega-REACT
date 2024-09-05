import { useEffect, useState } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, where, query} from 'firebase/firestore';
import { ItemList } from './ItemList';


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(4);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
    ? collection(db, "items") 
    : query(collection(db, "items"), where("category" , "==", id));

    getDocs(refCollection).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        })
      );
    })
    .finally(() => setLoading(false));
  }, [id])

  if (loading) return <Loader />;

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <div>
      <ItemList items={items} visibleItems={visibleItems} handleShowMore={handleShowMore} />
    </div>
  );
};
