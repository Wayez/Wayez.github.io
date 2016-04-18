package main

import ("fmt"
       "time"
       "math/rand")

type Adventurer struct {
     hp, mp int
}

func NewAdventurer() (tom *Adventurer){
     tom = &Adventurer{hp:10,mp:5}
     return
}

func (tom *Adventurer) GetHP() int{
     return tom.hp
}

//the "var" keyword allows for implicit types
func (tom *Adventurer) Heal() int{
     var healed = rand.Intn(5)
     (*tom).hp += healed
     return healed
}

//the ":=" assignment also allows implicit types for variables in functions
func (tom *Adventurer) Damage() int{
     damaged := rand.Intn(5)
     (*tom).hp -= damaged
     return damaged
}

func (tom *Adventurer) DoSomething(){
     var change int
     fmt.Printf("You pick something off the floor. You dust it off
         and eat it.\n")
     time.Sleep(2 * time.Second)
     if chance := rand.Float32() ; chance< 0.5 {
     change = tom.Damage()
     fmt.Printf("It's poison. You lose %d hp.\n",change)
     } else { //else goes on the same line as the ending if bracket
     change = tom.Heal()
     fmt.Printf("It's a cookie. Moldy, but good. It heals you for
         %d hp.\n",change)
     }
}

func main() {
     var Jerry *Adventurer = NewAdventurer()
     fmt.Printf("You are Jerry the Adventurer. Let's start you off with 10 hp.
         \nHi, Jerry. What are you going to do now?")
     time.Sleep(2 * time.Second)
     fmt.Println("\n\n\n")
     rand.Seed(time.Now().Unix())
     Jerry.DoSomething()
     time.Sleep(2 * time.Second)
     fmt.Println("\n\n\n")
     fmt.Printf("Jerry, you now have %d hp. What is wrong with you, Jerry.
         Go get a real job.\n",Jerry.GetHP())
}
