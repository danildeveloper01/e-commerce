import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullitem from "./components/ShowFullitem";


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [], 
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стол Pors',
          img: 'table.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'chairs',
          price: '19.99'
        },
        {
          id: 2,
          title: 'Стол Dab',
          img: 'table.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Тумба Klen',
          img: 'table_and_time.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'tables',
          price: '29.99'
        },
        {
          id: 4,
          title: 'Стол Desig',
          img: 'table.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'chairs',
          price: '9.99'
        },
        {
          id: 5,
          title: 'Тумба Qwerty',
          img: 'table_and_time.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'chairs',
          price: '9.99'
        },    
        {
          id: 6,
          title: 'Стол Lans',
          img: 'table.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'chairs',
          price: '19.99'
        },
        {
          id: 7,
          title: 'Тумба Main-Rem',
          img: 'table_and_time.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 8,
          title: 'Тумба Main',
          img: 'table_and_time.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'tables',
          price: '29.99'
        },
        {
          id: 9,
          title: 'Стол Xiym',
          img: 'table.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'chairs',
          price: '9.99'
        },
        {
          id: 10,
          title: 'Тумба Port',
          img: 'table_and_time.jpg',
          desc: 'Lorem ipsum dollor sit amet< consecteturs adipisicing.',
          category: 'tables',
          price: '9.99'
        }        
      ],
      showFullitem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return(
      <div className="wrapper">
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullitem && <ShowFullitem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    )
  }

  onShowItem (item) {
    this.setState({fullItem: item})
    this.setState ({showFullitem: !this.state.showFullitem})
  }

  chooseCategory (category) {
    if(category === 'all') {
      this.setState ({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder (id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState ({orders: [...this.state.orders, item] })
  }
}


export default App;
