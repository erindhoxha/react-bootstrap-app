import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
class Home extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <Jumbotron title="Welcome" subtitle="This is all created in React!" />
            <div className="container" style={{padding:'0px'}}>
              <h2>Welcome</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quae, fugit!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, asperiores ea modi ut id animi, eaque, nisi numquam laborum illum natus qui! Numquam, quisquam maiores esse laborum tempore, illum vel unde nulla dolorum error voluptatibus? Necessitatibus repellat doloremque ullam consectetur error modi perspiciatis mollitia, neque, a nam culpa officia at pariatur qui nulla maiores laudantium consequatur magnam amet magni iure eaque, suscipit possimus reiciendis? Quos deleniti quisquam natus velit itaque, sequi doloremque possimus, sapiente reiciendis at consequatur tenetur. Maiores dolorem corrupti quae perferendis tempora quidem voluptatum quas impedit nostrum officiis beatae hic tempore, illum incidunt eius ipsum. Quisquam qui excepturi amet dolores aliquid quia perferendis doloribus velit, est officiis, libero molestiae mollitia? Blanditiis, voluptatibus excepturi. Sequi modi distinctio ex veniam, aspernatur facere atque asperiores corrupti eveniet, aliquid debitis officiis id voluptatem commodi, amet eligendi cumque assumenda repellendus praesentium. Consequuntur corporis, esse ratione in obcaecati voluptatem! Illum expedita quam ipsam modi. Ut obcaecati minus impedit. Iure nulla deleniti reiciendis libero facere temporibus ad placeat dolore. Voluptatem unde similique esse mollitia qui! Placeat molestias beatae aspernatur corporis illo quasi expedita blanditiis enim magni, consequuntur ipsa alias ea, consectetur quaerat aliquam repellat culpa odio voluptatibus? Illo numquam provident temporibus quod ipsam placeat rerum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nulla! Quis, laborum incidunt laudantium, asperiores sequi ad reprehenderit ut in voluptas qui quibusdam velit quia repellat est omnis expedita reiciendis blanditiis et? Enim corporis expedita sunt veniam vero eveniet magni qui quasi sapiente quia velit reprehenderit, facere ipsam ullam assumenda?
              </p>
            </div>
            <Footer />
          </div>
        )
    }
}

export default Home