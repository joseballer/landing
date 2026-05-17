import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Logos />
            <Container>
                <Benefits />
                <FAQ />
            </Container>
        </>
    );
};

export default HomePage;
