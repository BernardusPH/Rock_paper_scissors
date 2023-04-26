
interface Rules {
    [key: string]: { beats: string[] };
  }
export default function calculation(userThrow:string, aiThrow:string):string{
    const rules:Rules  = {
        rock: { beats: ["scissors", "lizard"] },
        paper: { beats: ["rock", "spock"] },
        scissors: { beats: ["paper", "lizard"] },
        lizard: { beats: ["paper", "spock"] },
        spock: { beats: ["rock", "scissors"] }
      };
    
      if (userThrow === aiThrow) {
        return "Tie";
      } else if (rules[userThrow].beats.includes(aiThrow)) {
        return "You Win!";
      } else {
        return "You lost!";
      }
}