import Button from 'react-bootstrap/Button';
import VenueCard from './VenueCard';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import VenueImage from './VenueImage';

function VenueView({data}) {

    const venueTitle = data.venueTitle;

    const [isOpen, setIsOpen] = useState(false);

    const setIsOpenToTrue = () => {
        setIsOpen(true)
    };

    const setIsOpenToFalse = () => {
        setIsOpen(false)
    };

    return (
        <>
            <button className="promoButton" onClick={setIsOpenToTrue}>Click here to view promotions or offers</button>

            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title>{venueTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VenueCard data={data}/>
                    <VenueImage data={data}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={setIsOpenToFalse}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default VenueView;