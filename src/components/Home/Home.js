import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import image from '../../images/open-book.png';
import './Home.css';
const Home = ({ contacts, deleteContact }) => {

    return (

        <div className="container home">
            <h3 className="mt-5 text-center head">Welcome to our Contact Book </h3>
            <div className="row">
                
                <div className="col-md-12 mt-5">
                    <table className="table table-hover">
                        <thead className="table-header">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts?.length > 0 ? (
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>
                                            <Link
                                                to={`/edit/${contact.id}`}
                                                className="btn btn-sm btn-primary mr-1"
                                            >
                                                Edit
                                             </Link>
                                            <button
                                                type="button"
                                                onClick={() => deleteContact(contact.id)}
                                                className="button1 "
                                            >
                                                Delete
                                         </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <th>No contacts found</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// export default Home;

const mapStateToProps = (state) => ({
    contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;