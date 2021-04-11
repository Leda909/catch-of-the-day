import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
            // console.log("Making a Fisg");
            // console.log(this.nameRef.value.value);
        // 2. get the text from that input
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
          };
            // console.log(fish);
        // 3. Change the page to /store/whatever-they-entered
        this.props.addFish(fish);
        // 4. Refresh the form
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name" />
                <input name="price" type="text" placeholder="Price" />

                <select name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>

                <textarea name="desc" type="text" placeholder="Desc"></textarea>
                <input name="image" type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;