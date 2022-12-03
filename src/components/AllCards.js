import Card from './Card'
import one from '../assets/img/action.jpg';
import two from "../assets/img/adventure.jpg";
import three from "../assets/img/auto biography.jpg";
import four from "../assets/img/comedy.jpg";
import five from "../assets/img/fantasy.jpg";
import six from "../assets/img/horror-thriller.jpg";
import seven from "../assets/img/manga-graphic.jpg";
import eight from "../assets/img/mystery.jpg";
import nine from "../assets/img/romance.jpg";
import ten from "../assets/img/science fiction.jpg";
import eleven from "../assets/img/young adult.jpg";
function AllCards(){
    return(
        <center>
        <div>
            <Card img={one} title='BOOK CATERGORY' text="Here's some LGBT Action genre for you, check our collection in Fiction Books."/>
            <Card img={two} title='BOOK CATERGORY' text="Here's some LGBT Adventure genre for you, check our collection in Fiction Books."/>
            <Card img={three} title='BOOK CATERGORY' text="Here's some LGBT Auto Biography genre for you, check our collection in Non Fiction Books."/>
            <Card img={four} title='BOOK CATERGORY' text="Here's some LGBT Comedy genre for you, check our collection in Fiction Books."/>
            <Card img={five} title='BOOK CATERGORY' text="Here's some LGBT Fantasy genre for you, check our collection in Fiction Books."/>
            <Card img={six} title='BOOK CATERGORY' text="Here's some LGBT Horror-Thriller genre for you, check our collection in Fiction Books."/>
            <Card img={seven} title='BOOK CATERGORY' text="Here's some LGBT Manga & Graphic genre for you, check our collection in Manga & Graphic Books."/>
            <Card img={eight} title='BOOK CATERGORY' text="Here's some LGBT Mystery genre for you, check our collection in Fiction Books."/>
            <Card img={nine} title='BOOK CATERGORY' text="Here's some LGBT Romance genre for you, check our collection in Fiction Books."/>
            <Card img={ten} title='BOOK CATERGORY' text="Here's some LGBT Science Fiction genre for you, check our collection in Fiction Books."/>
            <Card img={eleven} title='BOOK CATERGORY' text="Here's some LGBT Young Adult genre for you, check our collection in Fiction Books."/>

        </div>
        </center>
    )
}

export default AllCards;