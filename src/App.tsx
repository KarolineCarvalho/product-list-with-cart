import Cart from "./components/Cart";
import styles from "./styles/App.module.css";
import { data } from "./data";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { useCartStore } from "./store";
import Card from "./components/Card";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items } = useCartStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Desserts</h1>
        <div className={styles.dessertsContainer}>
          {data.map((item) => {
            return (
              <Card
                key={item.name}
                CardImage={{ image: item.image, altText: `${item.name}` }}
                Button={{
                  variant: "default",
                }}
                itemInfo={{ ...item, thumbnail: item.image.thumbnail }}
              />
            );
          })}
        </div>
      </div>
      <Cart items={items} openModal={openModal} />
      <Modal items={items} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
