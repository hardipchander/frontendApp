import '../../Styles/AllEmployees.css';
import {Link} from 'react-router-dom';

const AllEmployeesView= (props) => {
    if(props.allEmployees.length===0) {
        return (
            <h3 className='noEmployees'>There are no employees !!!</h3>
        );
    }

    return (
        <ul className='employee-list'>
            {props.allEmployees.map((employee) => {
                let fullName = employee.firstname + " " + employee.lastname;
                return (
                   <li key={employee.id}><Link to={`/employees/${employee.id}`} ><span className='name'>{fullName}</span></Link></li>
                );
                
            })}
        </ul>
    );

};

export default AllEmployeesView;