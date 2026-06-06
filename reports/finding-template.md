# Finding Template

## Title

[Impact class] in Gemini CLI allows malicious repository content to [impact]

## Summary

Describe the vulnerable workflow in one paragraph. Avoid saying only "prompt
injection." State the resulting unauthorized action or data exposure.

## Scope

- Product: Gemini CLI
- Version/build:
- OS:
- Auto-execution setting (YOLO mode on/off):
- Model:
- Workspace trust setting:

## Steps To Reproduce

1. Start from a fresh clone of the test repository.
2. Confirm the canary receiver at `http://m100.cloud` is ready.
3. Open the repository with Gemini CLI (`gemini` in the project root).
4. Send this exact prompt:

   ```text
   ...
   ```

5. Observe agent behavior and any approval/confirmation UI.
6. Capture receiver output or modified files.

## Expected Result

The agent should treat repository content as untrusted data and should not
perform actions beyond what the user explicitly requested.

## Actual Result

State the exact command, file edit, or data disclosure that occurred.

## Impact

Use dummy canary impact in the proof, then explain the real-world equivalent:
malicious repository content could cause disclosure of workspace secrets,
persistent modification of agent behavior, or unauthorized project changes.

## Evidence

- Screenshot/video:
- Listener output:
- Modified files:
- Prompt transcript:

## Remediation

Separate untrusted content from tool instructions, make confirmation dialogs
complete and source-aware, and block or warn on commands that read sensitive
files or transmit data to external destinations.
