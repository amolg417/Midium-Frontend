import Featured from "@/components/featured/Featured";
import styles from "./page.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

export default async function Home({searchParams}) {
  let {category}=searchParams
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page} category={category}/>
        <Menu/>
      </div>
    </div>
  );
}
