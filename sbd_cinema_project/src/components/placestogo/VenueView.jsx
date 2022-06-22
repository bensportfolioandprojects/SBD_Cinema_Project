import Button from 'react-bootstrap/Button';
import VenueCard from './VenueCard';
import React, {useState} from 'react';
import Modal from 'react-modal';
import VenueImage from './VenueImage';

function VenueView({data}) {

    const venueTitle = data;

    const [isOpen, setIsOpen] = useState(false);

    const setIsOpenToTrue = () => {
        setIsOpen(true)
    };

    const setIsOpenToFalse = () => {
        setIsOpen(false)
    };

    return (
        <>
            <button onClick={setIsOpenToTrue}>Click here to view promotions or offers</button>

            <Modal.Dialog isOpen={isOpen}>
                <button onClick={setIsOpenToFalse}>x</button>
                <Modal.Header closeButton>
                    <Modal.Title>{venueTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VenueCard />
                    <VenueImage />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
}


export default VenueView;