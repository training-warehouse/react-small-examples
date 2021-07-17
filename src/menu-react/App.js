import React, {useState} from 'react';

import items from './data'

import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ['all', ...new Set(items.map(item => item.category))]     // 获取所有分类并去重

const App = () => {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>美食美客--菜单</h2>
                    <div className="underline"/>
                </div>
                <Categories filterItems={filterItems} categories={categories}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    );
};

export default App;