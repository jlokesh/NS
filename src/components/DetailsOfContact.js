import React, { useState } from 'react';
import contactsimg from '../media/i6.png';

const DetailsOfContact = (props) => {
    const [contacts, setContacts] = useState([
        { name: 'John Doe', phone: '1234567890', email: 'john@example.com', salesperson: 'Jane Smith', activities: 'Todo', city: 'New York', country: 'USA' },
        { name: 'Jane Smith', phone: '9876543210', email: 'jane@example.com', salesperson: 'John Doe', activities: 'Todo', city: 'London', country: 'UK' },
        { name: 'Alice Johnson', phone: '5555555555', email: 'alice@example.com', salesperson: 'Bob Williams', activities: 'Todo', city: 'Paris', country: 'France' },
        { name: 'Bob Williams', phone: '9999999999', email: 'bob@example.com', salesperson: 'Alice Johnson', activities: 'Todo', city: 'Berlin', country: 'Germany' },
        { name: 'Eve Anderson', phone: '1111111111', email: 'eve@example.com', salesperson: 'Ethan Davis', activities: 'Todo', city: 'Tokyo', country: 'Japan' },
        { name: 'Michael Brown', phone: '2222222222', email: 'michael@example.com', salesperson: 'Sarah Wilson', activities: 'Todo', city: 'Sydney', country: 'Australia' },
        { name: 'Sarah Wilson', phone: '3333333333', email: 'sarah@example.com', salesperson: 'Michael Brown', activities: 'Todo', city: 'Toronto', country: 'Canada' },
        { name: 'David Johnson', phone: '4444444444', email: 'david@example.com', salesperson: 'Emily Davis', activities: 'Todo', city: 'Madrid', country: 'Spain' },
        { name: 'Emily Davis', phone: '5555555555', email: 'emily@example.com', salesperson: 'David Johnson', activities: 'Todo', city: 'Rome', country: 'Italy' },
        { name: 'Alex Smith', phone: '6666666666', email: 'alex@example.com', salesperson: 'Olivia Johnson', activities: 'Todo', city: 'Moscow', country: 'Russia' },
        { name: 'Olivia Johnson', phone: '7777777777', email: 'olivia@example.com', salesperson: 'Alex Smith', activities: 'Todo', city: 'Beijing', country: 'China' },
        { name: 'Daniel Wilson', phone: '8888888888', email: 'daniel@example.com', salesperson: 'Sophia Anderson', activities: 'Todo', city: 'Cairo', country: 'Egypt' },
        { name: 'Sophia Anderson', phone: '9999999999', email: 'sophia@example.com', salesperson: 'Daniel Wilson', activities: 'Todo', city: 'Mumbai', country: 'India' },
    ]);

    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

    /*

    const handleEdit = (index, column) => {
        setEditableColumn(`${index}-${column}`);
    };

    const handleSave = (index, column, value) => {
        setEditableColumn('');
        const updatedContacts = [...contacts];
        updatedContacts[index][column] = value;
        setContacts(updatedContacts);
    };
    
    */

    /* Tab switching script */

    function openCity(evt, cityName) 
    {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
      
    /* Tab switching script */

    return (
        <div className='tablediv'>
            <div className='headerabovetable'>
                <h1 className='contactsheading'><img src={contactsimg} className='contactsheadingimg' width="40" height="35" alt='loading problem...'/>{sortedContacts[props.id]['name']}</h1>
                <img src={require('../media/i7.png')}  alt='i7' className='searchimage' />
                <input type="text" placeholder="Search..." className='searchbar' />




            </div>
            <table>
                <thead>
                    <tr className='heading'>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Salesperson</th>
                        <th>Activities</th>
                        <th>City</th>
                        <th>Country</th>    
                    </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{sortedContacts[props.id]['name']}</td>
                  <td>{sortedContacts[props.id]['phone']}</td>
                  <td>{sortedContacts[props.id]['email']}</td>
                  <td>{sortedContacts[props.id]['salesperson']}</td>
                  <td>{sortedContacts[props.id]['activities']}</td>
                  <td>{sortedContacts[props.id]['city']}</td>
                  <td>{sortedContacts[props.id]['country']}</td>
                  </tr>  
                </tbody>
            </table>
            <div className='personeditable'>
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
                    <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
                    </div>

                    <div id="London" class="tabcontent">
                    <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                    </div>

                    <div id="Paris" class="tabcontent">
                    <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p> 
                    </div>

                    <div id="Tokyo" class="tabcontent">
                    <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                    </div>
                </div>
        </div>
    );
};

export default DetailsOfContact;