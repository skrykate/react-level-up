import { Intro } from './_features/intro';
import { Sections } from './_features/sections';

export default function PageHome() {
    return (
        <div className="relative md:mb-20">
            <h1 className="sr-only">Introduction and Main Learning Sections</h1>
            <Intro />
            <Sections />
        </div>
    );
}
