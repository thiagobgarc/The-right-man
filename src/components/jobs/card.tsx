import { JobData } from "../../lib/data"

export const JobCard = () => {
    const imageSrc = JobData.image.src
    return (
        <section>
    <div>
        {
            JobData.map((job) => {
                return (
                    <a href={job.href} className="flex flex-col items-center justify-center gap-2">
                        <img
                            src={job.image}
                            alt="About Card Image"
                            className="object-cover object-center w-full h-[16rem] rounded-lg opacity-70 quality-95"
                        />
                        <p className="">
                            {job.name}
                        </p>
                        <p>
                            {job.date}
                        </p>
                        <p>
                            {job.description}
                        </p>
                        <p>
                            {job.location}
                        </p>
                    </a>
                )
            })
        }
    </div>
</section>
    )
}