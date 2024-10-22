import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample() {
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          sorry for inconvenience.<br/>
          We are working on BACKEND API.<br/>
        </p>
      </Alert>
    );
  }

export default AlertDismissibleExample;