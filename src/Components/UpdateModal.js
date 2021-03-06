import { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class UpdateModal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdateClick({
      _id: this.props.recipe._id,
      title: e.target.title.value,
      recipe_id: this.props.recipe.recipe_id,
      image: this.props.recipe.image,
      steps: e.target.steps.value.split(','),
      missedIngredientCount: this.props.recipe.missedIngredientCount,
      missedIngredients: e.target.missedIngredients.value.split(',').map((missed) => {
        return { name: missed };
      }),
      usedIngredients: this.props.recipe.usedIngredients,
      unusedIngredients: this.props.recipe.unusedIngredients,
      email: this.props.recipe.email,
    });
  };

  render() {
    return (
      <Modal show={this.props.showModal}>
        <Modal.Header id="update-modal-header" onClick={this.props.toggleModal} closeButton>
          <h2>Update This Recipe</h2>
        </Modal.Header>
        <Modal.Body id="update-modal-body">
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Change Recipe Title</Form.Label>
              <Form.Control type="string" name="title" defaultValue={this.props.recipe.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Enter Updated Missing Ingredients, comma separated</Form.Label>
              <Form.Control
                type="string"
                name="missedIngredients"
                defaultValue={this.props.recipe.missedIngredients.map((missed) => missed.name).join(',')}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingTextArea">
              <Form.Label>Enter Updated Recipe Steps, comma separated</Form.Label>
              <Form.Control as="textarea" name="steps" defaultValue={this.props.recipe.steps} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer id="update-modal-footer">
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdateModal;
