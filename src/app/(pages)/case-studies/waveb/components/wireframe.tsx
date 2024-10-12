import ChildSectionLayout from '@/src/components/childSectionLayout'

export default function WireframeSection() {
    return (
        <ChildSectionLayout value="Wireframe/ Final UI" className="container">
            <div className="space-y-5">
                <p>
                    Based on the sketched sitemap, we created wireframes for the following pages in order: the homepage, NFT information page, user information page, and blog. Given the limited time, this sequence was chosen to prioritize our resources on crafting an exceptional homepage. Additionally, we believe that the homepage and NFT information page are the most critical components of the project.
                </p>
            </div>
        </ChildSectionLayout>
    )
}
