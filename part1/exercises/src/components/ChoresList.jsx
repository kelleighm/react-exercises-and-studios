import classes from './ChoresList.module.css';


export default function ChoresList () {
   let pageTitle = "Chores List";
   return (
      <div> 
      <h3 className = {classes.choresHeading}>{pageTitle}</h3> 
         <ul>
            <li className={classes.choresText}>Empty Dishwasher</li>
            <li className={classes.choresText}>Complete prep work</li>
            <li className={classes.choresText}>Buy groceries</li>
         </ul>
      </div> 
   ); 
}