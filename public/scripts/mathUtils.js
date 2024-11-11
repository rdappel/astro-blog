
const extendLine = (p0, p1, length) => {
	const halfLength = length / 2;
	const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x);
	const cosXlen = Math.cos(angle) * halfLength;
	const sinXlen = Math.sin(angle) * halfLength;
	return {
		p0: { x: p0.x - cosXlen, y: p0.y - sinXlen },
		p1:	{ x: p1.x + cosXlen, y: p1.y + sinXlen }
	};
};

const getClosestPointOnLine = (p0, p1, p) => {
	const dx = p1.x - p0.x;
	const dy = p1.y - p0.y;
	const t = ((p.x - p0.x) * dx + (p.y - p0.y) * dy) / (dx * dx + dy * dy);
	return { x: p0.x + t * dx, y: p0.y + t * dy };
}

const getClosestPointOnLineSegment = (p0, p1, p) => {
	const dx = p1.x - p0.x;
	const dy = p1.y - p0.y;
	let t = ((p.x - p0.x) * dx + (p.y - p0.y) * dy) / (dx * dx + dy * dy);

	t = Math.max(0, Math.min(1, t));

	return {
		x: p0.x + t * dx,
		y: p0.y + t * dy
	};
}

const getCentroid = (p0, p1, p2) => {
    const Cx = (p0.x + p1.x + p2.x) / 3;
    const Cy = (p0.y + p1.y + p2.y) / 3;
    return { x: Cx, y: Cy };
};

const getLeft = ({ x, y, ...rest }) => ({ x: y, y: -x, ...rest });
const getRight = ({ x, y, ...rest }) => ({ x: -y, y: x, ...rest });

const getTriangleArea = (p0, p1, p2) => {
    return Math.abs(p0.x * (p1.y - p2.y) + p1.x * (p2.y - p0.y) + p2.x * (p0.y - p1.y)) / 2;
};

const isPointInTriangle = (p, p0, p1, p2) => {
    const areaABC = getTriangleArea(p0, p1, p2);
    const areaPAB = getTriangleArea(p, p0, p1);
    const areaPBC = getTriangleArea(p, p1, p2);
    const areaPCA = getTriangleArea(p, p2, p0);

    return areaABC === (areaPAB + areaPBC + areaPCA);
};

export { extendLine, getLeft, getRight, getClosestPointOnLine, getClosestPointOnLineSegment, getCentroid, 
	getTriangleArea, isPointInTriangle
 };