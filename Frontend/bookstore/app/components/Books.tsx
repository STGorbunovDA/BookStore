import Card from "antd/es/card/Card"
import { CardTitle } from "../Models/Cardtitle"
import Button from "antd/es/button/button"

interface Props {
    books: Book[]
}

export const Books = ({ books }: Props) => {
    return (
        <div className="cards">
            {books.map((book: Book) => (
                <Card 
                    key={book.id} 
                    title={<CardTitle 
                                title={book.title} 
                                price={book.price} />} 
                    bordered={false} >
                       <p>{book.description}</p> \
                       <div className="cards__buttons">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                       </div>
                </Card>
            ))}
        </div>
    )
}