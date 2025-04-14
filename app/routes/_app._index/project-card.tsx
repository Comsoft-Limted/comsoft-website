import Badge from '~/components/utility/badge'

export default function ProjectCard({ name, tags, image }: {
    name: string, tags: any[], image: string
}) {
    return (
        <div className="p-5 flex flex-col justify-between h-[300px] md:h-[400px] bg-gray-100 cursor-pointer hover:outline outline-primary-theme transition">
            <div className="flex items-center flex-wrap gap-3 text-gray-700">
                {tags.map((tag) => (<Badge text={tag} />))}
            </div>
            <h5 className="font-semibold text-2xl text-gray-800">
                {name}
            </h5>
        </div>
    )
}

