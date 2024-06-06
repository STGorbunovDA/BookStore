import { Modal } from "antd";
import { BookRequest } from "../services/books";
import { useEffect, useState } from "react";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Book;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: BookRequest) => void;
    handleUpdate: (id: string, request: BookRequest) => void;
}

export enum Mode {
    Create,
    Edit
}

export const CreateUpdateBook = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
}: Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(1);

    useEffect(() => {
        setTitle(values.title);
        setDescription(values.description);
        setPrice(values.price);
    }, [values])

    const handleOnOk = async () => {
        const bookRequest = { title, description, price };

        mode == Mode.Create ? handleCreate(bookRequest) : handleUpdate(values.id, bookRequest);
    }

    return (
        <Modal title={mode === Mode.Create ? "Add book" : "Edit book"}
               open={isModalOpen} 
               cancelText={"Cancel"}
               onOk={handleOnOk}
               onCancel={handleCancel}
            >
            <div className="book__modal">
                <Input value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="name" />
                <TextArea value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="description" />
                <Input value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    placeholder="Price" />
            </div>
        </Modal>
    )
};