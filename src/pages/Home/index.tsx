import { FC } from 'react';
import { Button } from 'antd'
interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <div>
      <h2>hello Home</h2>
      <Button>this is button</Button>
      <Button type="primary">primary type</Button>
    </div>
  );
};

export default Home;
