
const drawPoint = (context, point, size, text = "", textOffset = { x: 10, y: -10 }) => {
	context.fillStyle = point.color;
	const hs = size / 2.0;
	context.fillRect(point.x - hs, point.y - hs, size, size);

	if (text !== "") {
		context.font = "12px Tahoma";
		context.fillStyle = "black";
		context.fillText(text, point.x + textOffset.x, point.y + textOffset.y);
	}
};

const drawLine = (context, p0, p1, strokeColor, strokeWidth = 1) => {
	context.beginPath();
	context.moveTo(p0.x, p0.y);
	context.lineTo(p1.x, p1.y);
	context.strokeStyle = strokeColor;
	context.lineWidth = strokeWidth;
	context.stroke();
};

const drawVector = (context, p0, p1, strokeColor, strokeWidth = 1) => {
	drawLine(context, p0, p1, strokeColor, strokeWidth);
	const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x);
	const arrowLength = 10;
	const arrowAngle = Math.PI / 6;
	const arrow1 = {
		x: p1.x - arrowLength * Math.cos(angle + arrowAngle),
		y: p1.y - arrowLength * Math.sin(angle + arrowAngle),
	};
	const arrow2 = {
		x: p1.x - arrowLength * Math.cos(angle - arrowAngle),
		y: p1.y - arrowLength * Math.sin(angle - arrowAngle),
	};
	drawLine(context, p1, arrow1, strokeColor, strokeWidth);
	drawLine(context, p1, arrow2, strokeColor, strokeWidth);
};

const drawCircle = (context, point, radius, color) => {
	context.beginPath();
	context.arc(point.x, point.y, radius, 0, 2 * Math.PI);
	context.fillStyle = color;
	context.fill();
};

const drawRectangle = (context, point, width, height, outlineColor, fillColor, strokeWidth = 1) => {
	const halfWidth = width / 2;
	const halfHeight = height / 2;
	context.beginPath();
	context.rect(point.x - halfWidth, point.y - halfHeight, width, height);
	context.fillStyle = fillColor || "transparent";
	context.fill();
	context.strokeStyle = outlineColor;
	context.lineWidth = strokeWidth;
	context.stroke();
};

const drawTriangle = (context, p0, p1, p3, outlineColor, fillColor, strokeWidth = 1) => {
	context.beginPath();
	context.moveTo(p0.x, p0.y);
	context.lineTo(p1.x, p1.y);
	context.lineTo(p3.x, p3.y);
	context.closePath();
	context.fillStyle = fillColor || "transparent";
	context.fill();
	context.strokeStyle = outlineColor;
	context.lineWidth = strokeWidth;
	context.stroke();
};

const drawPolygon = (context, points, outlineColor, fillColor, strokeWidth = 1) => {
	context.beginPath();
	context.moveTo(points[0].x, points[0].y);
	for (let i = 1; i < points.length; i++) {
		context.lineTo(points[i].x, points[i].y);
	}
	context.closePath();
	context.fillStyle = fillColor || "transparent";
	context.fill();
	context.strokeStyle = outlineColor;
	context.lineWidth = strokeWidth;
	context.stroke();
};

export { drawPoint, drawLine, drawVector, drawCircle, drawRectangle, drawTriangle, drawPolygon };