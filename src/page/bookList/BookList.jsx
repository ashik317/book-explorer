import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ListedReadList from '../../component/listedBooks/ListedReadList';
import ListedWishList from '../../component/listedBooks/ListedWishList';

const BookList = () => {
  const [sortingType, setSortingType] = useState('default');

  return (
    <div className='container mx-auto px-4 py-8 my-3'>
      <button
        className='btn btn-info mb-4'
        popoverTarget='popover-1'
        style={{ anchorName: '--anchor-1' }}
      >
        Sort By: {sortingType}
      </button>

      <ul
        className='dropdown menu w-52 rounded-box bg-base-100 shadow-sm'
        popover='auto'
        id='popover-1'
        style={{ positionAnchor: '--anchor-1' }}
      >
        <li>
          <a onClick={() => setSortingType('pages')}>Pages</a>
        </li>
        <li>
          <a onClick={() => setSortingType('title')}>Title</a>
        </li>
      </ul>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>

        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
