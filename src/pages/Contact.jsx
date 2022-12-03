import { useLocation } from "react-router-dom";

export default function Contact() {

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  console.log(name);

  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facilis!
        Alias totam voluptate amet doloremque iusto, minus fugit hic
        reprehenderit libero consequuntur adipisci minima quas ab, placeat quam
        deserunt doloribus.
      </p>
    </div>
  );
}
