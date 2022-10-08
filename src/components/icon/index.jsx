import { Heart } from './Heart';
import { Branch } from './Branch';

const Index = ({ name, ...props }) => {

  switch(name) {
    case 'Heart': {
      return <Heart { ...props } />;
    }
    case 'Branch': {
      return <Branch { ...props } />;
    }
      default:
        return null
  }
}

Index.defaultProps = {
  size: 16,
  color: 'white'
}

export default Index;