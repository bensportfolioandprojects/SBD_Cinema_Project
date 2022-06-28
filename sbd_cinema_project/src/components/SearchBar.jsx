import Button from 'react-bootstrap/Button';
import SearchResults from './SearchResults';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const SearchBar = ({onSubmit}) => {

    const [term, setTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const setIsOpenToTrue = () => {
        setIsOpen(true)
    };

    const setIsOpenToFalse = () => {
        setIsOpen(false)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setIsOpen(true);
    };

    return ( 
        <div className="searcher">
            <form onSubmit={onFormSubmit} className="searchForm">
                <div className="searchField">
                    <input id="searchBox"  
                    value={term} 
                    onChange={(e) => setTerm(e.target.value)} 
                    type="search"
                    placeholder="Search term"
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Search term'}
                    className="me-2"
                    aria-label="Search"/>
                </div>
                <Button variant="outline-success" id="searchButton" type="submit">Search</Button>
            </form>
            <Modal show={isOpen}>
                <Modal.Header className="modalResults">
                    <Modal.Title>Search Results: {term}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalResults">
                    <SearchResults data={term}/>
                </Modal.Body>
                <Modal.Footer className="modalResults">
                    <Button variant="secondary" onClick={setIsOpenToFalse}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default SearchBar;