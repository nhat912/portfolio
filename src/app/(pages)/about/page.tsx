import Footer from "@/src/components/footer";
import Title from "@/src/components/title";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: 'Danh sách sản phẩm',
};

const PROJECTS_N_FIELDS = [
    {
        key: 'Washup',
        value: 'Service application'
    },
    {
        key: 'Medship',
        value: 'B2C Medical E-Commerce'
    },
    {
        key: 'Circa',
        value: 'B2C Medical E-Commerce'
    },
    {
        key: 'Thuocsi',
        value: 'B2B Medical E-Commerce'
    },
    {
        key: 'Dakoli',
        value: 'B2B E-Commerce'
    },
]

const TOOLS_N_SKILLS = [
    {
        key: 'Figma',
        value: 'Storytelling'
    },
    {
        key: 'Medship',
        value: 'User Interviews'
    },
    {
        key: 'Adobe Photoshop',
        value: 'User experience'
    },
    {
        key: 'Adobe Illustrator',
        value: 'Design system building'
    },
    {
        key: 'Prototype',
        value: 'User Interface'
    },
    {
        key: '',
        value: 'Figma Prototyping '
    },
]

export default function Page() {
    return (
        <Fragment>
            <main className="pb-10 lg:pb-[100px]">
                <Title
                    title="About"
                />
                <div className="space-y-8 lg:space-y-[100px] container">
                    <div className="space-y-3">
                        <p>
                            I&apos;m a UX/UI designer with over two years of experience creating intuitive, visually appealing interfaces that boost user satisfaction and engagement in the pharmaceutical e-commerce space. The platforms I&apos;ve worked on now serve nearly 200,000 users.
                        </p>
                        <p>
                            My skills include working with design systems, interaction design, information architecture, wireframing, and prototyping. I&apos;m also proficient in user flows, UX writing, UI design, and guerrilla user research.
                        </p>
                        <p>
                            Furthermore, my strong communication and collaboration skills enable me to integrate and adapt quickly in any environment. I’m always excited about new challenges that push me to improve my design skills. Continuous learning is my greatest passion, and I enjoy using my expertise to make a positive impact on both people and organizations.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="text-xl lg:text-[40px] lg:leading-normal font-bold w-full lg:w-1/3 lg:shrink-0 lg:grow-0">
                            Projects/ Fields
                        </div>

                        <div className="flex-1 space-y-3">
                            {PROJECTS_N_FIELDS.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="flex-1">{item.key}</div>
                                    <div className="flex-1">{item.value}</div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="text-xl lg:text-[40px] lg:leading-normal font-bold w-full lg:w-1/3 lg:shrink-0 lg:grow-0">
                            Tools/ Skills
                        </div>

                        <div className="flex-1 space-y-3">
                            {TOOLS_N_SKILLS.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="flex-1">{item.key}</div>
                                    <div className="flex-1">{item.value}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}
