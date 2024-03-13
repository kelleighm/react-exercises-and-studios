export default function HobbyLinks() {
    let pageTitle = "Hobby Links"; 
    let hobbyLinks = ["https://sarahjmaas.com/", "https://www.taylorswift.com/"]
   
   

   return (
      <div>
         <h3>{pageTitle}</h3>
         <p><a href = {hobbyLinks[0]}>Love to Read </a></p>
         <p><a href = {hobbyLinks[1]}>Love to Listen to Music </a></p>
      </div>      
   );
}