import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ListedReadList from '../../component/listedBooks/ListedReadList';
import ListedWishList from '../../component/listedBooks/ListedWishList';

const BookList = () => {
  return (
    <div className='container mx-auto px-4 py-8 my-3'>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>

        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
