import Badge from '~/components/utility/badge'

export default function ProjectCard({ name, tags, image }: {
    name: string, tags: any[], image: string
}) {
    return (
        <div className="p-5 flex flex-col justify-between h-[300px] bg-gray-100">
            <div className="flex items-center gap-3">
                {tags.map((tag) => (<Badge text={tag} />))}
            </div>
            <h5 className="font-semibold text-2xl">
                {name}
            </h5>
        </div>
    )
}

