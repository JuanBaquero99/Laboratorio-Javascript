//Social Media Profile

//1. User information
const username = 'Unbaquero'
const fullName = 'Juan Pablo'
const age = 25
const isStuden = true

//2. Address
const address = {
    street : '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321,
}

//3. Hobbies
const hobbies = ['coding', 'Reading', 'Gaming']

//4. Generating personalized bio
const personalizedBio = `Hi, I'm ${fullName},
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}
Follow me for coding adventures!`

//5. Print the user profile and bio
console.log(personalizedBio)
