import Tobias from "../assets/tobias.jpeg";
import Tobias2 from "../assets/tobias2.jpg";

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto sm:px-0 px-3">
      <h1 className="text-5xl text-center">About me:</h1>
      <img
        src={Tobias}
        alt="Tobias Rieper"
        className="float-left w-56 mr-5 mt-5"
      />
      <p className="mt-5">
        The Tobias Rieper character is an extremely wealthy corporate shark who
        is also involved in numerous criminal activities. He is purportedly a
        friend of Viktor Novikov, which is how he was able to attend the IAGO
        auction. Besides his job as a businessman, he was a cat burglar and
        thief-for-hire, and has been linked to the planning of the infamous
        Sierra Leone diamond heist in the late 1990’s. Rieper is a registered
        patient at the GAMA hospital, and has his check-ups there, during one
        such procedure his examiner noted his unusual biology to be marvelous
        and described him as a walking stem cell.
      </p>
      <img
        src={Tobias2}
        alt="Tobias Rieper"
        className="float-right w-56 ml-5 mt-5"
      />
      <p className="mt-5">
        Beneath the veneer of cultured sophistication lies a ruthless assassin.
        Rieper orchestrates elaborate schemes, often using his art expertise as
        a cover for his deadly machinations. He manipulates the art world,
        utilizing auctions and exhibitions as platforms for his lethal
        eliminations. His targets are carefully chosen, usually individuals who
        possess valuable information or pose a threat to his own clandestine
        operations.
      </p>
      <p className="mt-5">
        Beyond the assassin, lies a genuine appreciation for art and culture.
        Rieper possesses extensive knowledge of art history and a discerning eye
        for aesthetics. He expresses genuine admiration for the pieces he
        acquires, even as he uses them for his deadly purposes.
      </p>
      <p className="mt-5">
        Rieper's motivations are as enigmatic as his persona. While he operates
        with ruthless efficiency, there are glimpses of a deeper complexity to
        his character. He possesses a genuine appreciation for art and culture,
        and his actions often seem driven by a twisted sense of aesthetics. This
        duality adds depth and intrigue to his character, making him more than
        just a one-dimensional villain.
      </p>
    </div>
  );
};
export default About;
