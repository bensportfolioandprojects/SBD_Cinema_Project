import Button from 'react-bootstrap/Button'
import SearchResults from './SearchResults';
import Modal from 'react-bootstrap/Modal';

const SearchBar = ({onSubmit}) => {

    const [term, setTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const setIsOpenToTrue = () => {
        setIsOpen(true)
    };

    const setIsOpenToFalse = () => {
        setIsOpen(false)
    };

    onFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    return ( 
        <div className="searcher">
            <form onSubmit={onFormSubmit} className="searchForm">
                <div className="searchField">
                    <input  
                    value={term} 
                    onChange={(e) => setTerm(e.target.value)} 
                    type="search"
                    placeholder="Search term"
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Search term'}
                    className="me-2"
                    aria-label="Search"/>
                </div>
                <Button variant="outline-success" id="searchButton">Search</Button>
            </form>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title>Search Results</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SearchResults data={term}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={setIsOpenToFalse}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default SearchBar;