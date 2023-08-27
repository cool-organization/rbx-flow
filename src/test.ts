import Flow from ".";

new Flow.Config().free();

if (new Flow.Node().getAlignItems() === Flow.Align.Auto) {
	print("W");
}
