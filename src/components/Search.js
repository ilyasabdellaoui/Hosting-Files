import ReactSearchBox from "react-search-box";
import "../styles/Search.css";

function Search() {
    return (
        <div className="search-box-container">
            <div className="search-bar">
          <ReactSearchBox
            placeholder="Search for books"
            data={[
              {
                key: "Antigone",
                value: "Antigone", 
                route: "ANT"
              },
              {
                key: "La Boîte à Merveilles",
                value: "La Boîte à Merveilles",
                route: "BAM"
              },
              {
                key: "Le Dernier Jour d'un Condamné",
                value: "Le Dernier Jour d'un Condamné",
                route : "DJC"
              }
            ]}
            onSelect={(record) => {
              if (record.item.route) {
                window.location.href = record.item.route;
              }
            }}
            
            onFocus={() => {
              console.log("This function is called when it's focused");
            }}
            autoFocus
            leftIcon={<span className="search-icon">🔍</span>}
            iconBoxSize="48px"
            inputBackgroundColor="#212520"
            inputFontColor="#fff"
            inputFontSize="1rem"
            dropdownHoverColor="#212520"
          />
          </div>
        </div>
      );
}

export default Search;