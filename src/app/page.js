import Container from "@/components/container/Container";
import Flex from "@/components/flex/Flex";

export default function Home() {
  return (
    <>
      <Container>
        <div className="w-full h-screen">
          <Flex className="w-full h-full justify-center items-center boxbg">
            <h2 className="w-2/4 p-10 font-primary font-semibold text-2xl text-center text-white bg-boxbg shadow-black shadow-lg rounded-md">
              The website is temporarily closed due to updating. Will be live
              again when the update is completed, thanks for staying tuned.
            </h2>
          </Flex>
        </div>
      </Container>
    </>
  );
}
