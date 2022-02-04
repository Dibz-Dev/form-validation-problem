import {useState,useEffect} from 'react';


const Form = () => {

    // creating state to hold each input value
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [color,setColor] = useState('')
  const [animals,setAnimals] = useState([])
  const [isTiger,setIsTiger] = useState(false)
  const [tigerType, setTigerType] = useState('')

//   Error message
const [errorMsg, setErrorMsg] = useState('')


// Function to push the new animal to the array of animals
  const animalHandler = (e) => {

    if(e.target.checked) {
      let singleAnimal = e.target.value;
      setAnimals(prevAnimals => [...prevAnimals,singleAnimal] );
    } 
// Conditional to determine whether or not the tiger type input needs to be filled
    if(e.target.value === 'tiger') {
      setIsTiger(true)
    } 
  }

// Validation function
  const validate = () => {

      if(!email.includes('@')) {
       setErrorMsg( 'please enter a valid email -  e.g john@smith.com')
       return false;
    } else {
        setErrorMsg('')
     
    }

    if(password.length < 8) {
        setErrorMsg('password must have at least 8 characters')
        return false;
     } else {
         setErrorMsg('')
      
     }

    if(!color) {
        setErrorMsg('please select a color')
       return false;
    } else {
        setErrorMsg('')
     
    }

    if(animals.length < 2) {
        setErrorMsg('please select at least 2 animals')
        return false;
     } else {
         setErrorMsg('')
      
     }

    if(animals.includes('tiger') && !tigerType) {
        setErrorMsg('please enter a tiger')
        return false;
     } else {
         setErrorMsg('')
        setIsTiger(true)
     }

    return true;
  }

const handleSubmit = (e) => {
  e.preventDefault()
  const validation = validate()
  if(validation) {
      validate()
      console.log([email,password,color,animals,isTiger,tigerType])
  }
}

    return ( 
        <form action="" onSubmit={handleSubmit}>
            <h1>Fill out this awesome form</h1>
        <fieldset>
            <h3>Your details</h3>
            <p className={errorMsg.includes('email') ? 'error' : null}>
                <label className='label' for='email'>
                    Email
                </label>
                <input 
                type='text' 
                id='email' 
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                />
            </p>
            <p className={errorMsg.includes('password') ? 'error' : null}>
                <label className='label' for='password'>
                    Password
                </label>
                <input 
                className='error' 
                type='password' 
                id='password' 
                name='username'
                onChange={(e) => setPassword(e.target.value)}/>
            </p>
        </fieldset>

        <fieldset>
            <h3>Your animal</h3>
            <p className={errorMsg.includes('color') ? 'error' : null}>
                <label className='label' for='colour'>
                    Colour
                </label>
                <select 
                name='colour' 
                id='colour'
                onChange={(e) => setColor(e.target.value)}>
                    <option value=''>Choose colour</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='red'>Red</option>
                    <option value='black'>Black</option>
                    <option value='brown'>Brown</option>
                </select>
            </p>
            <p className={errorMsg.includes('animals') ? 'error' : null}>
                <span className="label">
                    Animal
                </span>

                <input onChange={animalHandler} type='checkbox' name='animal' value='bear' id='bear'/>
                <label for='bear'>
                     Bear
                </label>

                <input onChange={animalHandler} type='checkbox' name='animal' value='tiger' id='tiger'/>
                <label for='tiger'>
                    Tiger
                </label>

                <input onChange={animalHandler} type='checkbox' name='animal' value='snake' id='snake'/>
                <label for='snake'>
                     Snake
                </label>

                <input onChange={animalHandler} type='checkbox' name='animal' value='donkey' id='donkey'/>
                <label for='donkey'>
                     Donkey
                </label>
            </p>
            <p className={errorMsg.includes('tiger') ? 'error' : null}>
                <label className='label' for='tiger_type'>
                    Type of tiger
                </label>
                <input onChange={(e) => setTigerType(e.target.value)}type='text' name='tiger_type' id='tiger_type'/>
            </p>
        </fieldset>
        <span className='error'>{errorMsg}</span>
        <fieldset>
         
            <p>
                <input type='submit' value='Create account'/>
            </p>
        </fieldset>
        </form>
     );
}
 
export default Form;