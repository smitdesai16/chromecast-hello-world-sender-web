import React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const ApplicationDetail = React.lazy(() => import("../components/ApplicationDetails"));
const Actions = React.lazy(() => import("../components/Actions"));
const HealthCheck = React.lazy(() => import("../components/HealthCheck"));

const Home = () => {
    const fallbackRender = () => {
        return <p>Error</p>;
    };

	return (
		<ErrorBoundary fallbackRender={fallbackRender}>
			<div style={{ display: "flex", width: "100%", wordBreak: "break-all" }}>
				<Suspense fallback={<p>Loading Hello World</p>}>
					<ApplicationDetail />
				</Suspense>
				<Suspense fallback={<p>Loading Hello World</p>}>
					<Actions />
				</Suspense>
				<Suspense fallback={<p>Loading Hello World</p>}>
					<HealthCheck />
				</Suspense>
			</div>
		</ErrorBoundary>
	);
};

export default Home;