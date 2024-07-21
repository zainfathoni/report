import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import Description from "~/components/description";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // Dummy data for demonstration
  const data = {
    id: params.id,
    subject: "Mathematics",
    grade: "5",
    yearTerm: "2023/24",
    overview: "An overview of the mathematical concepts covered in this term.",
    strength: "Strong understanding of algebra and geometry.",
    challenges: "Needs improvement in problem-solving speed.",
    recommendation: "Practice more word problems and timed tests.",
    conclusion: "Good progress overall with room for improvement.",
    portfolio: "http://example.com/portfolio",
  };

  return json(data);
};

export default function ReportDetails() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="custom-bg min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">Zavi Homeschool</div>
          <div className="custom-header py-2 mt-2 rounded">
            <div className="text-white font-semibold">
              Report Details {data.id}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1">
              <Description>
                <Description.Title>Subject</Description.Title>
                <Description.Item>{data.subject}</Description.Item>
              </Description>
            </div>
            <div className="col-span-1">
              <Description>
                <Description.Title>Grade</Description.Title>
                <Description.Item>{data.grade}</Description.Item>
              </Description>
            </div>
            <div className="col-span-1">
              <Description>
                <Description.Title>Year/Term</Description.Title>
                <Description.Item>{data.yearTerm}</Description.Item>
              </Description>
            </div>
          </div>
          <div className="mb-4">
            <Description>
              <Description.Title>Overview</Description.Title>
              <Description.Item>{data.overview}</Description.Item>
            </Description>
          </div>
          <div className="mb-4">
            <Description>
              <Description.Title>Strength</Description.Title>
              <Description.Item>{data.strength}</Description.Item>
            </Description>
          </div>
          <div className="mb-4">
            <Description>
              <Description.Title>
                Areas of Challenges/Improvements
              </Description.Title>
              <Description.Item>{data.challenges}</Description.Item>
            </Description>
          </div>
          <div className="mb-4">
            <Description>
              <Description.Title>
                Recommendation for Further Improvement
              </Description.Title>
              <Description.Item>{data.recommendation}</Description.Item>
            </Description>
          </div>
          <div className="mb-4">
            <Description>
              <Description.Title>Conclusion</Description.Title>
              <Description.Item>{data.conclusion}</Description.Item>
            </Description>
          </div>
          <div className="mb-4">
            <Description>
              <Description.Title>Portfolio (Link)</Description.Title>
              <Description.Item>
                <a
                  href={data.portfolio}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.portfolio}
                </a>
              </Description.Item>
            </Description>
          </div>
        </div>
      </div>
    </main>
  );
}
