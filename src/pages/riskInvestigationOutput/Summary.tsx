import { MdOutlineFileDownload } from "react-icons/md";

const Summary = () => {

  return (
      <div className="col-span-1 bg-custom-gray p-4 max-h-screen min-h-screen overflow-auto">
        <div className="grid">
          <span className="text-3xl font-bold">John Doe of Tesla</span>
          <div className="flex justify-between">
            <span className="text-base">
              San Francisco, California, United States
            </span>
            <div className="flex items-center cursor-pointer">
              <MdOutlineFileDownload className="text-3xl text-custom-green" />
              <span className="text-base">Export Report</span>
            </div>
          </div>
        </div>
        <div className="bg-custom-green my-4 h-[1px]" />
        <div className="grid gap-2">
          <span className="text-xl font-bold">Risk Score: 1</span>
          <p>
            Zaid Nesheiwat, currently holding the position of VP Portfolio
            Operations at ORIX Capital Partners, embodies a comprehensive and
            versatile skill set honed through significant roles at KPS Capital
            Partners and General Electric, as well as through his educational
            background in Engineering and Management from Clarkson University.
            With a professional journey marked by a dedication to operational
            excellence and strategic development within various sectors, his
            leadership at ORIX Capital Partners since April 2020 has been
            instrumental in deploying over $550 million of capital, focusing on
            creating sustainable value in middle-market companies. His clean
            record across multiple checks—ranging from criminal and bankruptcy
            records to industry sanctions—underscores a reputation of integrity
            and professionalism. Furthermore, his involvement in the recent
            incorporation of Sapere Advisors, LLC indicates an ongoing
            commitment to leadership and operational development. Zaid's
            profile, devoid of any controversies or political activities,
            combined with a diverse and impactful career, supports a risk score
            of 1/5, indicating a low-risk, high-integrity professional standing.
          </p>
        </div>
        <div className="bg-custom-green my-4 h-[1px]" />
        <div className="grid gap-2">
          <span className="text-xl font-bold">Summary of John Doe</span>
          <p>
            Zaid Nesheiwat serves as the Vice President of Portfolio Operations
            at ORIX Capital Partners (OCP) in Greater Orlando, Florida, bringing
            extensive experience in operational management, strategic sourcing,
            and corporate audit from his tenure at notable firms including KPS
            Capital Partners and General Electric. At OCP, a subsidiary of ORIX
            Corporation USA, he has played a pivotal role since April 2020 in
            leveraging the firm's operational expertise to enhance the value of
            middle-market companies in the business services, industrial
            services, and general industrials sectors. With over $550 million of
            capital deployed since OCP's inception in 2016, Nesheiwat's
            contributions underscore his ability to collaborate with management
            teams and entrepreneurs to foster sustainable growth and strategic
            improvements. Prior to joining OCP, Nesheiwat honed his skills at
            KPS Capital Partners, managing portfolio operations and aiding in
            the structural enhancement of portfolio companies to increase their
            market competitiveness and profitability, a role that capitalized on
            his background in strategic sourcing and audit at General Electric.
            His academic foundation in Engineering and Management from Clarkson
            University supports his operational and management leadership
            capabilities. Nesheiwat's record is marked by integrity and
            professionalism, with no
          </p>
        </div>
      </div>
  );
};

export default Summary;
