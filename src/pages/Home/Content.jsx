import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

/**
 * Represents a book.
 * @constructor
 * @param {string} title
 * @returns
 */

export const Content = ({ title, author }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="content-container">
            {arr.map((el) => (
                <Card key={el} style={{ width: '100%', border: '0' }}>
                    <Card.Img
                        style={{ width: '100%', border: '0' }}
                        variant="top"
                        src="https://www.facetofacestyle.com/wp-content/uploads/2022/03/FACE-TO-FACE-STYLE-ABITO-KATE-NERO-01-600x900.jpg"
                    />
                    <Card.Title style={{ position: 'absolute' }}>
                        Card Title
                    </Card.Title>
                    <Card.Body style={{ border: '0' }}>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
