import Card from "antd/es/card/Card"
import Button from "antd/es/button/button"
import { CardTitle } from "./Cardtitle"

interface Props {
    books: Book[];
    handleDelete: (id: string) => void;
    handleOpen: (book: Book) => void;
}

export const Books = ({ books, handleDelete, handleOpen }: Props) => {
    return (
        <div className="cards">
            {books.map((book: Book) => (
                <Card
                    key={book.id}
                    title={<CardTitle
                        title={book.title}
                        price={book.price} />}
                    bordered={false} >
                    <p>{book.description}</p>
                    <div className="cards__buttons">
                        <Button onClick={() => handleOpen(book)} style={{ flex: 1 }}>Edit</Button>
                        <Button onClick={() => handleDelete(book.id)} danger style={{ flex: 1 }}>Delete</Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}