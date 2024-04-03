import kanbanData from "../assets/data/kanban.json";
import classes from "../styles/ContentPage.module.css";
import Section from "../components/Section";

const ContentPage = () => {
  return (
    <div className={classes.container}>
      <Section status="To Do" kanbanDataList={kanbanData} />
      <Section status="In Progress" kanbanDataList={kanbanData} />
      <Section status="Done" kanbanDataList={kanbanData} />
    </div>
  );
};

export default ContentPage;
