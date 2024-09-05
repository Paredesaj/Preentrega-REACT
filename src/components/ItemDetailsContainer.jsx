import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemContext } from '../contexts/ItemContext';
import { ItemDetails } from './ItemDetails';

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(ItemContext);
  const { id } = useParams();

  useEffect(() => {
      const db = getFirestore();
      const refDoc = doc(db, "items", id);

      getDoc(refDoc)
          .then((snapshot) => {
              if (snapshot.exists()) {
                  setItem({ ...snapshot.data(), id: snapshot.id });
              } else {
                  console.error("No such document!");
              }
          })
          .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
      if (item) {
          addItem({ ...item, quantity });
      }
  };

  if (loading) return <Loader />;

  return (
      <div>
          {item ? <ItemDetails item={item} onAdd={onAdd} /> : <p>Item no encontrado.</p>}
      </div>
  );
};
