---
layout: default
title: Swift Everywhere – Android Build Status
---

<div style="background-color: #fef3c7; border-left: 6px solid #f59e0b; padding: 16px 24px; margin: 16px 0; font-family: Arial, sans-serif; color: #78350f; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h2 style="margin: 0 0 8px 0; font-size: 20px; color: #78350f;">Notice</h2>
<p style="margin: 0; font-size: 16px; line-height: 1.5;">As of June 2025, <a href="https://swiftpackageindex.com">swiftpackageindex.com</a> has started reporting the Android build status for all their packages, as announced on their <a href="https://swiftpackageindex.com/blog/adding-wasm-and-android-compatibility-testing">blog post</a>. This page will be kept up for a time as a reference, but it will not continue to receive updated build statuses going forward. We recomment using the more comprehensive build status reporting at <a href="https://swiftpackageindex.com">swiftpackageindex.com</a> to assess Android package compatibility.</p>
</div>

{% assign items = site.data.android %}
{% assign stats = site.data.android_stats %}

<h3>Android Build Status: {{ stats.success_packages | times: 100 | divided_by: stats.total_packages }}%</h3>

Of the <b>{{ stats.total_packages | number_format:"#,##0" }}</b> packages that are successfully building for
<a href="https://swiftpackageindex.com/search?query=platform:linux">Linux</a>,
<b>{{ stats.success_packages | number_format:"#,##0" }}</b>
are successfully building for Android using the
<a href="https://github.com/marketplace/actions/swift-android-action">GitHub swift-android-action</a>.

<table>
<tr>
    <th>Repository</th>
    <th>Status</th>
    <th>Stars</th>
</tr>
{% for value in items %}
<tr style="background-color: {% if value.status == 'success' %}#e6ffe6{% else %}#ffe6e6{% endif %};">
    <td><a href="{{ value.repo }}">{{ value.repo }}</a></td>
    <td><a href="https://github.com/swift-everywhere/swift-package-builds/actions/runs/{{ value.runid }}>">{{ value.status }}</a></td>
    <td>{{ value.stars }}</td>
    <!--
    <td>{{ value.created }}</td>
    <td>{{ value.modified }}</td>
    -->
</tr>
{% endfor %}
</table>

<div>
<p>
<small>
This page is automatically updated by a GitHub action running at
<a href="https://github.com/swift-everywhere/swift-package-builds">https://github.com/swift-everywhere/swift-package-builds</a>.
It was last generated at {{ site.time | date_to_string }}.
</small>
</p>
</div>
