# Javacript intro

If src is set, the script content is ignored.
A single <script> tag can’t have both the src attribute and code inside.

This won’t work:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>

We must choose either an external <script src="…"> or a regular <script> with code.

The example above can be split into two scripts to work:

<script src="file.js"></script>
<script>
  alert(1);
</script>
